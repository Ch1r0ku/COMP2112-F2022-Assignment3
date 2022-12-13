// IIFE
(function(){

    function start()
    {
        console.log("App Started...");

        $("#homelogo").on("click", ()=>{
            location.href = "/about";
        });

        $("#projectsButton").on("click", ()=>{
            location.href = "/projects";
        });

        $("#servicesButton").on("click", ()=>{
            location.href = "/services";
        });

        $("#contactButton").on("click", ()=>{
            location.href = "/contact";
        });
    }

    window.addEventListener("load", start);

})();