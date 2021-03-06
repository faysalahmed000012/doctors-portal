import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../Shared/Loading/Loading";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/doctors`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const handleDelete = (email, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete doctor ${name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `Doctor ${name} has been deleted.`, "success");

        fetch(`http://localhost:5000/doctor/${email}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
            }
          });
      }
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl">Manage Doctors {doctors.length}</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor._id}>
              <th>{index + 1}</th>
              <td>
                <div class="avatar">
                  <div class="w-16 mask mask-hexagon">
                    <img src={doctor.img} alt={doctor.name} />
                  </div>
                </div>
              </td>
              <td>{doctor.name}</td>
              <td>
                <button
                  onClick={() => handleDelete(doctor.email, doctor.name)}
                  className="btn btn-xs bg-red-500 text-white border-0 "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctors;
