import { ref } from "vue";
import axios from "axios";

export const useSearch = () => {

    const URL = "https://api.lmiforall.org.uk/api/v1/vacancies/search?limit=10&keywords=";

    const results = ref([]);

    const isWorking = ref(false);

    async function find(keyword) {

        isWorking.value = true;

        try {

            let response = await axios.get(URL + keyword.value);

            results.value = response.data;

            isWorking.value = false;

        } catch (e) {

            isWorking.value = false;
            console.log(e);
        }
    }

    return {
        find,
        results,
        isWorking
    }
};