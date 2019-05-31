exports.PHI = 1.618


console.log("not exported")


exports.explain = function() {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
}