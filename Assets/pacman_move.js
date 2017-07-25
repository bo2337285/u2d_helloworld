#pragma strict

var speed = 0.4;

function Start () {
	
}

function Update () {
	
}

function FixedUpdate () {

}

function valid(dir) {
    // Cast Line from 'next to Pac-Man' to 'Pac-Man'
	var pos = transform.position;
    RaycastHit2D hit = Physics2D.Linecast(pos + dir, pos);
    return (hit.collider == collider2D);
}