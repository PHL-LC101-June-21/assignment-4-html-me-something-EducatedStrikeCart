window.addEventListener("load", function () {
    window.alert(window.document.body.children.length)

    document.getElementById("backtotopButton").addEventListener("click", function () {
        window.location.href="#main"
    })

    document.getElementById("shrimpButton").addEventListener("click", function () {
        window.location.href="#shrimp"
    })

    document.getElementById("catfishButton").addEventListener("click", function () {
        window.location.href="#catfish"
    })

    document.getElementById("communityButton").addEventListener("click", function () {
        window.location.href="#community"
    })
})