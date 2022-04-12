var navbar = `
<div class="navbar navbar-inverse navbar-fixed-top headroom" >
<div class="container">
    <div class="navbar-header">
        <!-- Button for smallest screens -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" width="150" height="50" alt="Progressus HTML5 template"></a>
    </div>
    <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav pull-right">
            <li><a href="index.html">Home</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Projects<b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li><a href="sidebar-left.html">NFT's</a></li>
                    <li><a href="sidebar-left.html">Blockchain's</a></li>
                    <li><a href="sidebar-left.html">Crypto's</a></li>
                </ul>
            <li><a href="about.html">About</a></li>
            </li>
            <li><a href="contact.html">Contact us</a></li>
            <li class="active"><a class="btn" href="signin.html">SIGN IN / SIGN UP</a></li>
        </ul>
    </div><!--/.nav-collapse -->
</div>
</div> `;
document.body.insertAdjacentHTML("afterbegin",navbar);