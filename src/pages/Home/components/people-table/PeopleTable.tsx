"use client";
import { Person } from "@/models";
import { addFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PeopleTable: React.FC = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();

  const stateFavorite = useSelector((store: AppStore) => store.favorites);
  const statePeople = useSelector((store: AppStore) => store.people);

  const findPerson = (person: Person) => {
    return !!selectedPeople.find((p) => p.id === person.id);
  };

  const handleChange = (person: Person) => {
    const findedPeople = findPerson(person);
    const deletePeople = selectedPeople.filter((p) => p.id !== person.id);
    const filteredPeople = findedPeople
      ? deletePeople
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  const columns = [
    {
      field: "actions",
      headerName: "",
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  useEffect(() => {
    setSelectedPeople(stateFavorite);
  }, [stateFavorite]);

  return (
    <DataGrid
      rows={statePeople}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      pageSizeOptions={[pageSize]}
      initialState={{
        pagination: {
          paginationModel: { pageSize: pageSize, page: 0 },
        },
      }}
      getRowId={(row) => row.id}
    />
  );
};

export default PeopleTable;
