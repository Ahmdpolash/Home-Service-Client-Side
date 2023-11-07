import { useQuery } from "@tanstack/react-query";


const useBookings = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: "bookings",
    queryFn: async () => {
      await fetch("http://localhost:5000/api/bookings");
      return await data.json();
    },
  });
  return data, refetch, isLoading;
};

export default useBookings;
