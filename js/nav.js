$(document).ready(function() {
	console.log('ready');
	//create nav bar
	var nav = $('#nav');
	pages = ['About', 'Research', 'Collaborators', 'Contact'];
	activePage = window.location.href.split('/')[window.location.href.split('/').length-1]
	pagesList = createListOfPages(pages);
	nav.append(pagesList);
})

function createListOfPages(pages) {
	div = document.createElement('div');
	div.className = 'collapse navbar-collapse';
	div.id = 'navbarNav';
	ul = document.createElement('ul');
	ul.className = 'navbar-nav'
	for (var i = 0; i < pages.length; i++) {
		li = document.createElement('li');
		li.className = 'nav-item'
		a = document.createElement('a');
		a.appendChild(document.createTextNode(pages[i]));
		if (activePage.split('.html')[0] == pages[i].toLowerCase()){
			a.className = 'nav-link active';
			a.style.fontWeight = 'bold';
			span = document.createElement('span');
			span.className = 'sr-only';
			span.appendChild(document.createTextNode('(current)'));
			a.appendChild(span);
		} else {
			a.className = 'nav-link';
		}
		
		a.href = pages[i].toLowerCase()+'.html';
		a.style.color = '#F8F0E6';
		
		li.appendChild(a);
		ul.appendChild(li);
	}
	div.appendChild(ul);
	return div;
}