const whois = require('whois-json');

async function checkDomainAvailability(domain:string) {
    try {
        const data = await whois(domain);
        
        // Vérifier si le domaine est disponible
        const isAvailable = !data.domainName;   
        console.log(`Le domaine ${domain} est ${isAvailable ? 'disponible' : 'déjà enregistré'}.`);
        return isAvailable;
    } catch (error) {
        console.error("Erreur lors de la vérification du domaine:", error);
        return false;
    }
}
// Exemple d'utilisation
//checkDomainAvailability("mirhosty123231.com").then(console.log);

export default checkDomainAvailability;
