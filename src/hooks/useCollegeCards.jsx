import { useQuery } from "@tanstack/react-query";

const useCollegeCards = () => {
    const { data: collegeCards = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allCollege'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allCollege');
            return res.json();
        }
    })

    return [collegeCards, loading, refetch]
};

export default useCollegeCards;