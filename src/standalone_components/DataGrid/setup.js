import $A from '../AccDC'
import GridClass from './aria_data_grid_module.js'

export default function setGrid(gridObj){

	var grid = new GridClass('dataGridId');

	// set accessible text for screen reader users
	grid.setAccessibleText(
					{
					// Set offscreen and tooltip text for toggle cells
					toggleButtonRole: 'Toggle Button',
					toggleButtonState: 'Pressed',
					disabledText: 'Disabled',
					// Set the page text to be announced to screen reader users during infinite scrolling. E.G "Page 2", "Page 3", etc.
					pageRole: 'Page'
					});

	grid.mapColumnNames(gridObj.columnNames);

	grid.enableRowHeaders(true, 'row-id');
	grid.setRowMax(10);

	var pageHeaderSpan = $A.getEl('pTotal'), pageEdit = $A.getEl('goTo'), pageCurrent = 0, pageTotal = 0,
		firstBtn = $A.getEl('btnFirst'), prevBtn = $A.getEl('btnPrev'), nextBtn = $A.getEl('btnNext'),
		lastBtn = $A.getEl('btnLast');

	grid.setPageIndexChangeListener(function(currentPage, totalPages, gridInstance){
		if (pageCurrent != currentPage){
			if (currentPage === 1){
				firstBtn.disabled = prevBtn.disabled = true;
			}

			else{
				firstBtn.disabled = prevBtn.disabled = false;
			}

			if (currentPage === totalPages){
				nextBtn.disabled = lastBtn.disabled = true;
			}

			else{
				nextBtn.disabled = lastBtn.disabled = false;
			}
		}
		pageTotal = totalPages;
		pageHeaderSpan.innerHTML = 'Page ' + currentPage + ' of ' + totalPages;
		pageEdit.value = pageCurrent = currentPage;
	});

	grid.open();

	// Set pagination bindings
	$A.bind('button.paginate', 'click', function(ev){
		var o = this, open = false;

		if (o.id == 'btnFirst' && pageCurrent > 1){
			grid.firstPage();
			open = true;
		}

		else if (o.id == 'btnPrev' && pageCurrent > 1){
			grid.prevPage();
			open = true;
		}

		else if (o.id == 'btnNext' && pageCurrent < pageTotal){
			grid.nextPage();
			open = true;
		}

		else if (o.id == 'btnLast' && pageCurrent < pageTotal){
			grid.lastPage();
			open = true;
		}

		else if (o.id == 'btnGo'){
			var val = Math.floor(pageEdit.value);

			if (val > 0 && val <= pageTotal && val !== pageCurrent){
				grid.openPage(val);
				open = true;
			}

			else
				pageEdit.value = pageCurrent;
		}

		if (open){
			$A.announce('Page ' + pageCurrent);
			grid.focus();
		}
		ev.preventDefault();
	});
	$A.bind(pageEdit, 'keydown', function(ev){
		var k = ev.which || ev.keyCode;

		if (k == 13){
			$A.trigger('#btnGo', 'click');
			ev.preventDefault();
		}
	});

	$A.bind('#buv', 'click', function(ev){
		// Programmatically update a value anywhere within the grid using it's rowID/colID index
		grid.setValue(5, 'personal-email', 'HOOAH@whatsock.com');
		'Cell Updated'.announce();
		ev.preventDefault();
	});

	return grid
}