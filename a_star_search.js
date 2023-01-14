/*
I Brad Alfano, 000731709 certify that this material is my original work.
No other person's work has been used without due acknowledgement.
I have not made my work available to anyone else.
 */

const graph = 	
[[2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,1,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647],	
[2147483647,1,1,1,1,1,1,1,1,1,1,1,1,2147483647,1,1,1,1,1,2147483647],	
[2147483647,2147483647,2147483647,1,2147483647,2147483647,1,2147483647,2147483647,1,2147483647,1,2147483647,2147483647,1,2147483647,1,2147483647,1,2147483647],	
[2147483647,1,1,1,1,1,1,1,2147483647,1,2147483647,1,1,2147483647,1,2147483647,1,2147483647,1,2147483647],	
[2147483647,1,2147483647,1,2147483647,2147483647,2147483647,1,2147483647,1,2147483647,2147483647,1,1,1,2147483647,1,2147483647,1,2147483647],	
[2147483647,1,2147483647,1,1,1,2147483647,1,1,1,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,1,2147483647,1,2147483647],	
[2147483647,1,2147483647,1,2147483647,1,2147483647,2147483647,2147483647,1,2147483647,1,1,1,2147483647,1,1,1,1,2147483647],	
[2147483647,1,2147483647,2147483647,2147483647,1,1,1,2147483647,1,2147483647,1,2147483647,1,2147483647,2147483647,2147483647,2147483647,1,2147483647],	
[2147483647,1,1,1,2147483647,1,2147483647,1,2147483647,1,1,1,2147483647,1,1,1,1,1,1,2147483647],	
[2147483647,1,2147483647,2147483647,2147483647,1,2147483647,1,2147483647,2147483647,2147483647,2147483647,2147483647,1,2147483647,1,2147483647,2147483647,2147483647,2147483647],	
[2147483647,1,1,1,1,1,2147483647,1,1,1,2147483647,1,1,1,2147483647,1,2147483647,1,1,2147483647],	
[2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,1,2147483647,1,2147483647,1,2147483647,1,2147483647,1,2147483647,2147483647],	
[2147483647,1,1,1,1,1,1,1,2147483647,1,1,1,1,1,1,1,1,1,1,2147483647],	
[2147483647,1,2147483647,2147483647,2147483647,2147483647,2147483647,1,2147483647,1,1,2147483647,1,2147483647,2147483647,1,2147483647,2147483647,2147483647,2147483647],	
[2147483647,1,1,1,1,1,2147483647,1,1,1,2147483647,2147483647,1,1,2147483647,1,1,1,1,2147483647],	
[2147483647,2147483647,2147483647,2147483647,2147483647,1,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,1,2147483647],	
[2147483647,1,2147483647,1,1,1,2147483647,1,1,1,1,1,1,1,2147483647,1,1,1,1,2147483647],	
[2147483647,1,1,1,2147483647,1,2147483647,1,2147483647,2147483647,1,2147483647,2147483647,1,2147483647,1,2147483647,2147483647,2147483647,2147483647],	
[2147483647,1,2147483647,1,2147483647,2147483647,2147483647,1,2147483647,1,1,1,2147483647,1,2147483647,1,1,1,1,2147483647],	
[2147483647,2147483647,2147483647,1,1,1,2147483647,1,2147483647,1,2147483647,1,2147483647,1,2147483647,2147483647,2147483647,2147483647,1,2147483647],	
[2147483647,1,1,1,2147483647,1,1,1,2147483647,1,1,1,2147483647,1,1,1,1,1,1,2147483647],	
[2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,1,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647,2147483647]];

class Node{
    x;
    y;
    gScore;
    hScore;
    fScore;
    distance;
    parent;
    child;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
function compareTo(a,b){
    if(a.fScore == b.fScore){
        if(a.hScore == b.hScore){
            return 0;
        }else if(a.hScore - b.hScore > 0){
            return 1;
        }else{
            return -1;
        }
    }else if(a.fScore - b.fScore > 0){
        return 1;
    }else{
        return -1;
    }
}

var start = [0,9];
var end = [21,10];
var row = graph.length;
var col = graph[0].length;

var heuristicType = "E";
var map;

var canvas;
var ctx;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    generateNodes();
}

function check(type) {
    heuristicType = type;
  }

function solve(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
    generateNodes();
    let path = search(start, end);
    let interval = 1000;
    path.child = null;
    while(path.parent != null){
        path.parent.child = path;
        path = path.parent;
    }
    while(path != null){
        showPath(path, interval);
        interval += 700;
        path = path.child;
    }
}

function generateNodes(){
    map = [];
    for(i = 0; i < row; i++){
        map[i] = [];
        for(j = 0; j < col; j++){
            map[i][j] = new Node(i,j);
            
            if(graph[i][j] == 1){
                ctx.fillStyle = "white";
                ctx.fillRect((j * canvas.width/col),(i * canvas.height/row), canvas.width/col, canvas.height/row);
            }else{
                ctx.fillStyle = "black";
                ctx.fillRect((j * canvas.width/col),(i * canvas.height/row), canvas.width/col, canvas.height/row);
            }
        }
    }
}

function getNeighbours(position){
    let neighbours = [];
    let straight = [[-1,0],[1,0],[0,-1],[0,1]];
    for(let dir of straight){
        let x = position[0] + dir[0];
        let y = position[1] + dir[1];
        if(x >= 0 && y >= 0 && x < row && y < col && graph[x][y] != 2147483647){
            let n = map[x][y];
            n.distance = graph[x][y];
            neighbours.push(n);
        }
    }
    
    if(heuristicType == "E"){
        let diagonal = [[-1,-1],[-1,1],[1,-1],[1,1]];
        for(let dir of diagonal){
            let x = position[0] + dir[0];
            let y = position[1] + dir[1];
            if(x >= 0 && y >= 0 && x < row && y < col && graph[x][y] != 2147483647){
                let n = map[x][y];
                let horizontal = Math.min(graph[x][position[1]], graph[position[0]][y]);
                let vertical = graph[x][y];
                n.distance = Math.sqrt( Math.pow(horizontal, 2) + Math.pow(vertical, 2) );
                neighbours.push(n);
            }
        }
    }
    return neighbours;
}

function heuristic(start, goal){
    let result;
    if(heuristicType == "M"){
        result = Math.abs(start[0] - goal[0]) + Math.abs(start[1] - goal[1]);
    }else{
        result = Math.sqrt( Math.pow(Math.abs(start[0] - goal[0]), 2) + Math.pow(Math.abs(start[1] - goal[1]), 2) );
    }
    return result;
}

function search(start, goal){
    let closedNodes = [];
    let openNodes = [];
    startNode = map[start[0]][start[1]];
    startNode.parent = null;
    startNode.gScore = 0;
    startNode.hScore = heuristic(start, goal);
    startNode.fScore = startNode.gScore + startNode.hScore;
    openNodes.push(startNode);
    let interval = 100;

    while(openNodes.length != 0){
        openNodes.sort(compareTo);
        let n = openNodes[0];
        openNodes.shift();
        
        showVisit(n, interval);
        interval +=100;

        if(n.x == goal[0] && n.y == goal[1]){
            return n;
        }
        let neighbours = getNeighbours([n.x,n.y]);
        for(let m of neighbours){
            let total_path = n.gScore + m.distance;
            if(!openNodes.includes(m) && !closedNodes.includes(m)){
                m.parent = n;
                m.gScore = total_path;
                m.hScore = heuristic([m.x,m.y], goal);
                m.fScore = m.gScore + m.hScore;
                openNodes.push(m);
            }else{
                if(total_path < m.gScore){
                    m.parent = n;
                    m.gScore = total_path;
                    m.hScore = heuristic([m.x,m.y], goal);
                    m.fScore = m.gScore + m.hScore;
                    if(closedNodes.includes(m)){
                        let index = closedNodes.indexOf(m);
                        closedNodes.splice(index, 1);
                        openNodes.push(m);
                    }
                }
            }
        }
        closedNodes.push(n);
    }

    return null;
}

function showPath(node, interval){       
    setTimeout(
        function() {
            ctx.fillStyle = "#f45d48";
            ctx.fillRect((node.y * canvas.width/col),(node.x * canvas.height/row), canvas.width/col, canvas.height/row);
            ctx.fillStyle = "black";
            ctx.font = "12px serif";
            ctx.fillText("h:"+node.hScore.toFixed(2),(node.y * canvas.width/col) + 1,(node.x * canvas.height/row) + 10);
            ctx.fillText("g:"+node.gScore.toFixed(2),(node.y * canvas.width/col) + 1,(node.x * canvas.height/row) + 21);
            ctx.fillText("f:"+node.fScore.toFixed(2),(node.y * canvas.width/col) + 1,(node.x * canvas.height/row) + 34);
        }, 
        interval);
}

function showVisit(node, interval){      
    setTimeout(
        function() {  
            ctx.fillStyle = "#078080";
            ctx.fillRect((node.y * canvas.width/col),(node.x * canvas.height/row), canvas.width/col, canvas.height/row);
            ctx.fillStyle = "black";
            ctx.font = "12px serif";
            ctx.fillText("h:"+node.hScore.toFixed(2),(node.y * canvas.width/col) + 1,(node.x * canvas.height/row) + 10);
            ctx.fillText("g:"+node.gScore.toFixed(2),(node.y * canvas.width/col) + 1,(node.x * canvas.height/row) + 21);
            ctx.fillText("f:"+node.fScore.toFixed(2),(node.y * canvas.width/col) + 1,(node.x * canvas.height/row) + 34);
        }, 
        interval);
}

