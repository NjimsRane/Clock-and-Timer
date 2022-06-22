/* i have selected the date element already on my my main page*/ 

function date(){

  let dateElement = new Date();

  let day = dateElement.getDate();
  let month = dateElement.getMonth();
  let year = dateElement.getFullYear();

  /* in js they start counting month from 0, it is why i have to add 1 to month  to find a really month according to calendar*/
  month++;

  /*  */
  if (day < 10)day = `0${day}`;
  if (month < 10)month = `0${month}`;

  setDate.innerText = `${day} / ${month} / ${year}`

}
date();