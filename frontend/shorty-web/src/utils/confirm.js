import Swal from "sweetalert2";

export const confirmDelete = async () => {
  const result = await Swal.fire({
    title: "Delete URL?",
    text: "This action cannot be undone.",
    icon: "warning",

    showCancelButton: true,

    confirmButtonColor: "#2563eb",
    cancelButtonColor: "#334155",

    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",

    background: "#0f172a",
    color: "#ffffff",
  });

  return result.isConfirmed;
};