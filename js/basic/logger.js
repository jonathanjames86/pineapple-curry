// create an object (call it logger) with two methods
// method one: logs out msg with word INFO: prefixed
// method two: logs err to console with ERROR: prefixed

var logger = {
  msg: function(){
    alert("INFO: prefixed")
  },
  err: function() {
    alert("ERROR: prefixed")
  }

};
