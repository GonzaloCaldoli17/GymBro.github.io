class RandomUser{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://randomuser.me/api/';
        fetch(URL)
        .then(response => response.json())
        .then(data => RandomUser.renderUserData(data))
        .catch(error => alert(error));
    }

    static renderUserData(data){
        // console.log(data);
        let user = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
        <div class = "card-head">
            <a href = "mailto:${user.email}"><i class = "fas fa-envelope"></i> Email</a>
            <div class = "user-image">
                <img src = "${user.picture.large}" alt = "">
            </div>
        </div>

        <div class = "card-body">
            <div class = "user-post-address">
                <div>
                    <span>Avenida Maipu 91342</span><span>Direccion</span>
                </div>
            </div>

            <div class = "user-name">
                <span class = "user-name-title">${user.name.title}.</span>
                <span class = "user-name-full">${user.name.first} ${user.name.last},</span>
                <span class = "user-age">${user.dob.age}</span>
            </div>

            <div class = "user-location-address">
                <span>Cardio, Corssfit, Boxeo</span>
            </div>
        </div>

        <div class = "card-foot">
            <div class = "user-contact-info">
                <span>
                    <i class = "fas fa-phone"></i> ${user.phone}
                </span>
                <span>
                    <i class = "fa-solid fa-mobile-button"></i> ${user.cell}
                </span>
            </div>
        </div>
        `;
    }
}


document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchFromAPI();
});

RandomUser.fetchFromAPI();
