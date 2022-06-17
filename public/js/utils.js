let utils = {
    add_bg_obj: function(obj_count, top_multiplier = 50) {
        let bg = document.getElementById('bg-obj');
        if(!bg) return;

        let last_top = 0;
        for(var i = 0; i < obj_count; i++) {
            let rand = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
            let rand_left = Math.floor(Math.random() * (800 - 50 + 1)) + 50;
            rand_left += rand;
            let top = last_top + top_multiplier;
            last_top = top;
            bg.innerHTML += `<svg id="pattern" xmlns="http://www.w3.org/2000/svg" style="left: ${rand_left}px; top: ${top}px;" width="150px" height="150px" fill="rgba(255, 255, 255, .1)" class="bi bi-link" viewBox="0 0 16 16">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
            </svg>`
        }
    }
}

