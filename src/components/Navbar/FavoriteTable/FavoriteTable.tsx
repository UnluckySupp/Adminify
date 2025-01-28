import { Person } from "@/models";
import { removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Box, Button } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const FavoriteTable: React.FC = () => {
  const pageSize = 5;
  const dispatch = useDispatch();

  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Button
                sx={{
                  padding: "2px",
                  minwidth: "20px",
                }}
                onClick={() => handleClick(params.row)}
              >
                <DeleteOutlineIcon />
              </Button>
            </Box>
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

  return (
    <DataGrid
      rows={stateFavorites}
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

export default FavoriteTable;
