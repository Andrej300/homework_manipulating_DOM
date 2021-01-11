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
  
    const position = document.createElement('h2');
    position.textContent = form.position.value;
    palayerListItem.appendChild(position);
  
    const country = document.createElement('h3');
    county.textContent = form.country.value;
    playerListItem.appendChild(country);
  
    const first = document.createElement('p');
    category.textContent = form.first.value;
    playerListItem.appendChild(first);

    console.log(form.stillPlaying.value);
  
    return playerListItem;
  }
  
  const handleDeleteAllClick = function (event) {
    const playerList = document.querySelector('#player-list');
    playerList.innerHTML = '';
  };
