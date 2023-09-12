import React, {useState} from "react";
import {
  useAddAccountsMutation,
  useDeleteAccountsMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../utiis/api/api";
import {FaTrash, FaEdit} from "react-icons/fa";
type adminDataType = {
  id: number;
  amount: number;
};

const Admin = () => {
  const {data, error, isLoading} = useGetAccountsQuery();
  const [addAccounts] = useAddAccountsMutation();
  const [deleteAccount] = useDeleteAccountsMutation();
  const [updateAccount] = useUpdateAccountMutation();
  const [amount, setAmount] = useState<number>(0);
  // const [id, setId] = useState<number | null>(null);

  return (
    <>
      <h4>Admin</h4>
      {data &&
        data.length > 0 &&
        data.map((item: adminDataType) => (
          <div
            key={item.id}
            style={{display: "flex", flexDirection: "row", margin: "10px"}}
          >
            <div style={{margin: "0 10px"}}>{item.amount}</div>

            <button
              style={{margin: "0 10px"}}
              onClick={() => updateAccount({id: item.id, amount: 777})}
            >
              <FaEdit />
            </button>
            <button
              style={{margin: "0 10px"}}
              onClick={() => deleteAccount(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}

      <div style={{display: "flex", flexDirection: "row", margin: "10px"}}>
        <input
          value={amount}
          onChange={(e) => {
            setAmount(+e.target.value);
          }}
          style={{
            margin: "0 10px",
            border: "2.5px solid #646cff",
            borderRadius: "4px",
            background: "aliceblue",
            color: "black",
            fontSize: "16px",
          }}
        />
        <button onClick={() => addAccounts(amount, data && data.length + 1)}>
          Add Account
        </button>
      </div>
    </>
  );
};

export default Admin;
