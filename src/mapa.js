d3.xml("../imagenes/world.svg")   
.then(data => {     
    d3.select("#mapa").node().append(data.documentElement)   
});