// Get quotes from API

let apiQuotes = []
async function getQuoates() {
    const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json"

    try {
        const response = fetch(apiURL)
        apiQuotes= await response.json()
        console.log(apiQuotes)
    } catch(error) {
        //catch ERROR here

    }
}

// On load

getQuoates()
