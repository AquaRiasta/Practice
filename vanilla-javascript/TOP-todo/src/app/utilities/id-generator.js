function IDgenerator(length) {
  var result = "";
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; ++i) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function makeID(type) {
  switch (type) {
    case "checklist":
      return IDgenerator(20);
    case "task":
      return IDgenerator(18);
    case "project":
      return IDgenerator(16);
  }
}

export default makeID;