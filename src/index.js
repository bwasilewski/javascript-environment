// module imports
import $ from 'jquery'
import {getUsers, deleteUser} from './api/userApi'

// style imports
import './index.css';

// Populate the users table via api call
getUsers().then(result => {
  let usersBody = '';

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="delete-user">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  // const deleteLinks = global.document.getElementsByClassName('delete-user');
  const deleteLinks = $('.delete-user');

  deleteLinks.on('click', ev => {
    const $target = $(ev.currentTarget);
    const $row = $target.parents('tr')

    ev.preventDefault();

    deleteUser($target.attr('data-id'));
    $row.remove();
  })
})
