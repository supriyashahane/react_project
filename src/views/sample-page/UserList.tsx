import React from 'react';
import { useNavigate } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Button,
    Grid,
    Typography
} from '@mui/material';
import SearchBar from 'material-ui-search-bar';

// project imports
import axios from 'axios';
import { UserProfile } from '_mockApis/user-profile/types';

// assets
import Article from '@mui/icons-material/Article';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import AddIcon from '@mui/icons-material/Add';

// ==============================|| USER LIST 1 ||============================== //

const UserList = () => {
    const theme = useTheme();
    const valueBasic = new Date();
    const valueBasic1 = JSON.stringify(valueBasic);
    console.log(valueBasic1);
    const [data, setData] = React.useState<UserProfile[]>([]);
    const [rows, setRows] = React.useState<UserProfile[]>([]);
    const getData = async () => {
        const response = await axios.get('https://visionarybizz.com/testbackend1/user.php');
        // console.log(response);
        setData(response.data);
        setRows(response.data);
    };
    console.log(data);
    let not = 0;
    data.forEach((element): void => {
        console.log(element.Dateinstant?.slice(0, 10));
        console.log(valueBasic1?.slice(1, 11));
        if (element.Dateinstant?.slice(0, 10) === valueBasic1?.slice(1, 11)) {
            console.log('yes');
            not += 1;
            console.log(not);
            const cls = document.getElementById('hover11');
            cls?.classList.add('test11');
            element.Dateinstant = `${element.Dateinstant?.slice(0, 10)} renew now`;
        } else {
            element.Dateinstant = `${element.Dateinstant?.slice(0, 10)}`;
        }
    });
    localStorage.setItem('kanha', JSON.stringify(not));
    const originalRows = data;
    const [searched, setSearched] = React.useState<string>('');
    function requestSearch(searchedVal: string): void {
        const filteredRows = originalRows.filter((row) => row.NameInstant?.toLowerCase().includes(searchedVal.toLowerCase()));
        setRows(filteredRows);
    }
    console.log(rows);
    console.log(originalRows);
    const cancelSearch = () => {
        setSearched('');
        requestSearch(searched);
    };
    function daleteuser(x: UserProfile): void {
        if (window.confirm(`You want to delete the user: ${x.NameInstant}`)) {
            const url = `https://visionarybizz.com/testbackend1/user.php?id=${x.id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((response) => {
                    getData();
                })
                .catch((error) => alert(error));
            console.log('Thing was saved to the database.');
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }
    React.useEffect(() => {
        getData();
    }, []);
    const navigate = useNavigate();
    const handleClick = (x: UserProfile) => {
        navigate('/profile3', { state: x });
    };
    const handleProject = () => {
        navigate('/Layouts');
    };
    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Project Lists</Typography>
                    </Grid>
                    <Grid item>
                        <SearchBar
                            value={searched}
                            onChange={(searchVal) => requestSearch(searchVal)}
                            onCancelSearch={() => cancelSearch()}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" startIcon={<AddIcon />} onClick={handleProject}>
                            Project
                        </Button>
                    </Grid>
                </Grid>
            }
            content={false}
        >
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ pl: 3 }}>#</TableCell>
                            <TableCell>Project Name</TableCell>
                            <TableCell>Server Name</TableCell>
                            <TableCell>Renewal Dated</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row, index) => (
                            <TableRow hover key={index} id="hover11">
                                <TableCell sx={{ pl: 3 }}>{index + 1}</TableCell>
                                <TableCell>{row.NameInstant}</TableCell>
                                <TableCell>{row.ServerInstant}</TableCell>
                                <TableCell>{row.Dateinstant}</TableCell>
                                <TableCell>{row.ProfileInstant}</TableCell>
                                <TableCell align="center" sx={{ pr: 3 }}>
                                    <Stack direction="row" justifyContent="center" alignItems="center">
                                        <Tooltip placement="top" title="Details">
                                            <IconButton
                                                color="primary"
                                                aria-label="delete"
                                                size="large"
                                                onClick={() => {
                                                    handleClick(row);
                                                }}
                                            >
                                                <Article sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip placement="top" title="Delete">
                                            <IconButton
                                                color="primary"
                                                sx={{
                                                    color: theme.palette.orange.dark,
                                                    borderColor: theme.palette.orange.main,
                                                    '&:hover ': { background: theme.palette.orange.light }
                                                }}
                                                size="large"
                                                onClick={() => {
                                                    daleteuser(row);
                                                }}
                                            >
                                                <BlockTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainCard>
    );
};

export default UserList;
