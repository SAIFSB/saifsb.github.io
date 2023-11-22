<script>
    document.addEventListener('DOMContentLoaded', function() {
        var menuIcon = document.getElementById('menu-icon');
        var navBar = document.getElementById('navbar');
        menuIcon.addEventListener('click', function() {
            navBar.classList.toggle('active');
        });
    });
</script>
