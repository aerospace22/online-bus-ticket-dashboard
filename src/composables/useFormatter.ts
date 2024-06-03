import moment from "moment";

export const useFormatter = () => {
  const formatDate = (dateStr: string) => {
    return moment(dateStr).format("MMM DD, Y");
  };

  return {
    formatDate,
  };
};
