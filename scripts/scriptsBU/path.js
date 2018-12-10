
var findShortestPath = function(startCoordinates, grid) {
  var distanceFromTop = startCoordinates[1];
  var distanceFromLeft = startCoordinates[0];

  // Each "location" will store its coordinates
  // and the shortest path required to arrive there
  var location = {
    distanceFromTop: distanceFromTop,
    distanceFromLeft: distanceFromLeft,
    path: [],
    status: 'Start'
  };

  // Initialize the queue with the start location already inside
  var queue = [location];

  // Loop through the grid searching for the goal
  while (queue.length > 0) {
    // Take the first location off the queue
    var currentLocation = queue.shift();

    // Explore North
    newLocation = exploreInDirection(currentLocation, 'North', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    // Explore East
    newLocation = exploreInDirection(currentLocation, 'East', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    // Explore South
    newLocation = exploreInDirection(currentLocation, 'South', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    // Explore West
    newLocation = exploreInDirection(currentLocation, 'West', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }
  }

  // No valid path found
  return false;

};

// This function will check a location's status
// (a location is "valid" if it is on the grid, is not an "obstacle",
// and has not yet been visited by our algorithm)
// Returns "Valid", "Invalid", "Blocked", or "Goal"
var locationStatus = function(location, grid) {
  var gridSize = grid.length;
  var dft = location.distanceFromTop;
  var dfl = location.distanceFromLeft;

  if (location.distanceFromLeft < 0 ||
      location.distanceFromLeft >= gridSize ||
      location.distanceFromTop < 0 ||
      location.distanceFromTop >= gridSize) {

    // location is not on the grid--return false
    return 'Invalid';
  } else if (grid[dfl][dft] === 'Goal') {
    return 'Goal';
  } else if (grid[dfl][dft] !== 'Empty') {
    // location is either an obstacle or has been visited
    return 'Blocked';
  } else {
    return 'Valid';
  }
};


// Explores the grid from the given location in the given
// direction
var exploreInDirection = function(currentLocation, direction, grid) {
  var newPath = currentLocation.path.slice();
  newPath.push(direction);

  var dft = currentLocation.distanceFromTop;
  var dfl = currentLocation.distanceFromLeft;

  if (direction === 'North') {
    dft -= 1;
  } else if (direction === 'East') {
    dfl += 1;
  } else if (direction === 'South') {
    dft += 1;
  } else if (direction === 'West') {
    dfl -= 1;
  }

  var newLocation = {
    distanceFromLeft: dfl,
    distanceFromTop: dft,
    path: newPath,
    status: 'Unknown'
  };
  newLocation.status = locationStatus(newLocation, grid);

  // If this new location is valid, mark it as 'Visited'
  if (newLocation.status === 'Valid') {
    grid[newLocation.distanceFromLeft][newLocation.distanceFromTop] = 'Visited';
  }

  return newLocation;
};



let newPath; // move this or kill it

// console.log(newPath);
let pathInstructionsXCoor = 0;
let pathInstructionsYCoor = 0;

function findNewPath(startX, startY){
  newPath = findShortestPath([startX, startY], grid);
  if(!newPath){
    console.log('path failed');
    return false;
  }
  else{
    newPath.forEach(function(square) {    
      if(square == "East"){
        pathInstructionsXCoor += 20;
        player1.pathInstructions.push({x:pathInstructionsXCoor,y:pathInstructionsYCoor});
      }
      if(square == "West"){
        pathInstructionsXCoor -= 20;
        player1.pathInstructions.push({x:pathInstructionsXCoor,y:pathInstructionsYCoor});
      }
      if(square == "North"){
        pathInstructionsYCoor -= 20;
        player1.pathInstructions.push({x:pathInstructionsXCoor,y:pathInstructionsYCoor});
      }
      if(square == "South"){
        pathInstructionsYCoor += 20;
        player1.pathInstructions.push({x:pathInstructionsXCoor,y:pathInstructionsYCoor});
      }
    });
    
  }
  
}
