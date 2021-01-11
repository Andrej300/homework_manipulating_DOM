document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const playerListItem = createPlayerListItem(event.target);
    const playerList = document.querySelector('#player-list');
    playerList.appendChild(playerListItem);
  
    event.target.reset();
  }
  
  const createPlayerListItem = function (form) {
    const playerListItem = document.createElement('li');
    playerListItem.classList.add('playing-list-item');

    const fullName = document.createElement('h2');
    fullName.textContent = `${form.first.value} ${form.last.value}`;
    playerListItem.appendChild(fullName);

    const position = document.createElement('h3');
    position.textContent = form.position.value;
    playerListItem.appendChild(position);
  
    const country = document.createElement('h3');
    country.textContent = form.country.value;
    playerListItem.appendChild(country);
    

  
    return playerListItem;
  }
  
  const handleDeleteAllClick = function (event) {
    const playerList = document.querySelector('#player-list');
    playerList.innerHTML = '';
  };
