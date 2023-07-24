import { useQuery } from "@tanstack/react-query";

const useCollegeCards = () => {
    const { data: collegeCards = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allCollege'],
        queryFn: async () => {
            const res = await fetch('https://college-bookings-server.vercel.app/allCollege');
            return res.json();
        }
    })

    return [collegeCards, loading, refetch]
};

export default useCollegeCards;