class launcher {
    constructor(a, b){
        var options = {
            bodyA: a,
            pointB: b,
            length: 20,
            stiffness: 0.04
        }
        this.pa = b
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

display(){
    
    if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position
    var pointB = this.pa
    push();
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y)
    pop();
}}
fly(){
    this.sling.bodyA = null
}

attach(stone){
    this.sling.bodyA = stone
}

}