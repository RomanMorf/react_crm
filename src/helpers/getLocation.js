const success = (pos) => {
  console.log(pos.coords.latitude, 'lat');
  console.log(pos.coords.longitude, 'lng');
}

const error = (error) => {
  console.log(error, 'error');
}

export const getLocation = () => {
  navigator.geolocation.getCurrentPosition(success, error);
}