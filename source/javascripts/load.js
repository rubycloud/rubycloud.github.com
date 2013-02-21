function init()
{
	// Get the active elements
	var toggles = document.getElementsByClassName('display');
	
	// Get the passive elements
	var stretchers = document.getElementsByClassName('stretcher');

	// Create the accordion object
	var myAccordion = new fx.Accordion(toggles, stretchers, {opacity: true, duration: 250});

	// Function to figure out if URL is taking us directly to one of the tabs
	function checkHash()
	{
		var found = false;
		toggles.each(
			function(h3, i)
			{
				if( window.location.href.indexOf(h3.title) > 0 )
				{
					myAccordion.showThisHideOpen(stretchers[i]);
					found = true;
				}
			}
		);
		return found;
	}
	
	// Open the first tab if the URL isn't taking us directly to one
	if( !checkHash() ) 
		myAccordion.showThisHideOpen(stretchers[0]);
}
