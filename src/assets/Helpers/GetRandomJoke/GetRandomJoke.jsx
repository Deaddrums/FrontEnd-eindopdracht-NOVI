import axios from "axios";


async function GetRandomJoke() {

    try {
        const response = await axios.get(
            "https://official-joke-api.appspot.com/random_joke"
        );

        return response.data;
    }

    catch (error) {

        console.error(error);

        return {
            joke:
                "Broodschaap heeft gezocht, maar vond alleen wat wol."
        };

    }
}

export default GetRandomJoke;
``