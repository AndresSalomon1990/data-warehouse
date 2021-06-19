document.addEventListener('DOMContentLoaded', function() {
  /* Sidenav */
  const sidenavs = document.querySelectorAll('.sidenav');
  const sidenavsInstances = M.Sidenav.init(sidenavs);
  
  /* Modals */
  const modals = document.querySelectorAll('.modal');
  const modalsInstances = M.Modal.init(modals);

  /* Selects */
  const selects = document.querySelectorAll('select');
  const selectsInstances = M.FormSelect.init(selects);

  /* Floating Action Button */
  const floatingActionButton = document.querySelectorAll('.fixed-action-btn');
  const floatingActionButtonInstances = M.FloatingActionButton.init(floatingActionButton);

  /* Floating Action Button */
  const collapsibles = document.querySelectorAll('.collapsible');
  const collapsiblesInstances = M.Collapsible.init(collapsibles);
});

// function to capitalize the first letters of the names as they are saved in lower case
function capitalizeFirstLetter(string) {
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  };

  return words.join(' ');
};