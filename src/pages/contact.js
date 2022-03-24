export default function getContactHTML() {
    return createContactHtml()
}

function createContactHtml(){
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact');
    contactContent.insertAdjacentHTML('beforeend', `
    <div class="container">
        <header class="section-title">
            <h1>Contact us</h1>
        </header>
        <div class="contact-wrap">
            <div class="map">
            <iframe class="contact-frame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d883.4988206311642!2d-75.17283107973782!3d39.94581608717842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c639542012af%3A0xb01d50935f96e7cf!2zMTgxMyBMb21iYXJkIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ2LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1647851754855!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" language=en></iframe>
            </div>
            <div class="contact-info">
                <div class="contact-address">
                    <h3 class="row-flex-title">Details</h3>                     
                    <p>
                        <span>123-456-7890</span>
                        <span>1813 Lombard</span>
                        <span>St, Philadelphia, PA</span>
                    </p>
                </div>
            </div>
        </div>
    </div>`)

    return contactContent
}