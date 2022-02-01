import {github} from './github';
import {ui} from './ui';

const searchInput = document.getElementById("search-user");

searchInput.addEventListener("keyup", e => {
  //e.preventDefault();
  const userText = e.target.value
  if (userText !== "") {
    github.getUser(userText)
    .then(data => {
      if (data.profileData.message === "Not Found") {
        // show an alert
        ui.showAlert("User not found", "alert alert-danger")
      }
      else {
        //onsole.log(data.profileData);
        ui.showProfile(data.profileData);
        ui.showRepos(data.reposData);
      }
    })
  }
  else {
    ui.clearProfile();
  }
})