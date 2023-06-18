export function auth(email, password) {

    var formData = `email=${email}&password=${password}`

    return fetch(process.env.REACT_APP_BACKEND_URL + 'auth/', {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formData
      }).then(response => response.json())
        .then(data => {
            if (data["data"].length === 1) {
                return data["data"][0]["token"]
            } else {
                alert('Ошибка авторизации. Проверьте введенный пароль и логин.'); 
            }
        })
}

export function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

export function handleClick(e) {
    var curr = document.getElementById(e.target.id);
    var elems = document.querySelectorAll('.nav-link.px-2');
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].textContent === curr.textContent) {
            if (elems[i].className.indexOf('text-body-secondary') >= 0) {
                elems[i].className = 'nav-link px-2 text-body-secondary';
            } else {
                elems[i].className = 'nav-link px-2 link-secondary';
            }
        } else {
            if (elems[i].className.indexOf('text-body-secondary') >= 0) {
                elems[i].className = 'nav-link px-2 text-body-secondary';
            } else {
                elems[i].className = 'nav-link px-2';
            }
        }
    }
    // side nav-link link-dark
    elems = document.querySelectorAll('.side.nav-link');
    for (i = 0; i < elems.length; i++) {
        if (elems[i].textContent === curr.textContent) {
            if (elems[i].className.indexOf('link-dark') >= 0) {
                elems[i].className = 'side nav-link active';
            }
        } else {
            elems[i].className = 'side nav-link link-dark';
        }
    }
};

export function getUser() {
    const email = getCookie('email')
    const token = getCookie('token')

    return fetch(process.env.REACT_APP_BACKEND_URL + `users/?email=${email}`, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
      }).then(response => response.json())
        .then(data => {
            if (data["data"].length === 1) {
                console.log(data["data"])
                return data["data"][0]
            }
        })
}


export async function editUser(name, mail, password) {
    const email = getCookie('email')
    const token = getCookie('token')

    const stateCp = {
        'name': name, 'email': mail, 'password': password
    }
    var formData = []
    Object.entries(stateCp).forEach(([key, value]) => {
        if (value !== '') {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(value);
            formData.push(encodedKey + "=" + encodedValue);
        }
    })
    formData = formData.join("&")
    console.log(formData)

    var result_id = fetch(process.env.REACT_APP_BACKEND_URL + `users/?email=${email}`, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
      }).then(response => response.json())
        .then(data => {
            if (data["data"].length === 1) {
                console.log(data["data"])
                return data["data"][0]['id']
            }
        })
    var rid = await result_id.then((id) => id)
    console.log(rid)

    return fetch(process.env.REACT_APP_BACKEND_URL + `users/?id=${rid}`, {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formData
      })
}
