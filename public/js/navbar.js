let navbar = {
    init: (name, avatar = null, body) => {
        let nav = `<div class="nav-box">
        <div class="nav" id="nav">
            <div class="nav-logo">
                <a href="/"><h2>Linkto <i class="fa-solid fa-link"></i></h2></a>
            </div>
            <div class="nav-links">
                <div class="link">
                    ${name ? `<h3><a href="/dashboard/profile" target="_blank">@${name}</a></h3>
                    <a href="/dashboard/profile" target="_blank"><img src="${avatar ? avatar : "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" + name}"></a>` : 
                    `<h4><a href="/login">Login</a></h4> <h4><a href="/register">Register</a></h4>`}
                </div>
                
            </div>
        </div>
    </div>`;
        return nav + body;
    }
}