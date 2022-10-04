import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material"
import React, { ReactElement, useState } from "react"
import FlareIcon from "@mui/icons-material/Flare"
import DoneIcon from "@mui/icons-material/Done"
import ClearIcon from "@mui/icons-material/Clear"
import PermIdentityIcon from "@mui/icons-material/PermIdentity"
import DescriptionIcon from "@mui/icons-material/Description"
import TaskIcon from "@mui/icons-material/Task"
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

interface ICard {
  name: string
  totalCount: number
  moneyCount?: string
  icon: ReactElement
  color: string
}

const cardsArray: Array<ICard> = [
  {
    name: "Total Leads and Deals",
    totalCount: 1600,
    moneyCount: "132 000 999€",
    icon: <FlareIcon />,
    color: "#C37ADD",
  },
  {
    name: "Won",
    totalCount: 45,
    moneyCount: "108 000€",
    icon: <DoneIcon />,
    color: "#7AD744",
  },
  {
    name: "Lost",
    totalCount: 15,
    moneyCount: "24 000€",
    icon: <ClearIcon />,
    color: "#F85C5C",
  },
  {
    name: "New Leads",
    totalCount: 115,
    icon: <PermIdentityIcon />,
    color: "#68C4FF",
  },
  {
    name: "Total Task",
    totalCount: 269,
    icon: <DescriptionIcon />,
    color: "#C37ADD",
  },
  {
    name: "Completed Task",
    totalCount: 115,
    icon: <TaskIcon />,
    color: "#7AD744",
  },
  {
    name: "Expired Task",
    totalCount: 45,
    icon: <AssignmentLateIcon />,
    color: "#F85C5C",
  },
  {
    name: "No Task",
    totalCount: 10,
    icon: <InsertDriveFileIcon />,
    color: "#68C4FF",
  },
]

function App() {
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <Container sx={{ p: 2 }}>
      <Grid sx={{ pb: 2 }} container>
        <Grid flexGrow={1} item>
          <DropMenu />
        </Grid>
        <Grid item>
          <PeriodBtns />
        </Grid>
      </Grid>

      {matches ? (
        <Grid container spacing={2}>
          {cardsArray.map((item) => (
            <ItemCard item={item} />
          ))}
        </Grid>
      ) : (
        <Box sx={{ width: "100wh", overflow: "hidden" }}>
          <Box
            sx={{
              width: "-webkit-fill-available;",
              overflowX: "scroll",
              display: "-webkit-box;",
            }}
          >
            {cardsArray.map((item, index) => (
              <Box sx={{ pl: 2 }}>
                <ItemCard key={index} item={item} />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default App

interface ICardProps {
  item: ICard
}

const ItemCard: React.FC<ICardProps> = ({ item }) => {
  return (
    <Grid item md={3}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Grid alignItems={"center"} container spacing={2}>
              <Grid item>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                    color: "white",
                    bgcolor: item.color,
                    borderRadius: "12px",
                    width: "56px",
                    height: "56px",
                  }}
                >
                  {item.icon}
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  fontWeight={"bold"}
                  sx={{ color: item.color }}
                  gutterBottom
                >
                  {item.name}
                </Typography>
                <Grid container alignItems={"center"}>
                  <Typography
                    sx={{ pr: 1 }}
                    fontWeight={"700"}
                    variant="body1"
                    color="black"
                  >
                    {item.totalCount}
                  </Typography>
                  <Typography variant="body1" color="black">
                    {item.moneyCount ? "| " + item.moneyCount : ""}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

const DropMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        sx={{ textDecoration: "none", color: "black" }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        All Pipelines
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Sales</MenuItem>
        <MenuItem onClick={handleClose}>Marketing</MenuItem>
        <MenuItem onClick={handleClose}>Partners</MenuItem>
      </Menu>
    </div>
  )
}

const PeriodBtns = () => {
  const [activeEl, setActiveEl] = useState("")

  const btnStyle = {
    height: "22px",
    fontWight: "400",
    size: "14px",
    color: "#AAB7D4",
    mr: 1,
  }
  const btnActive = {
    ...btnStyle,
    color: "#3D8FEC",
  }
  const handleClick = (btnName: string) => {
    setActiveEl(btnName)
  }

  return (
    <>
      <Button
        sx={activeEl === "month" ? btnActive : btnStyle}
        onClick={() => {
          handleClick("month")
        }}
      >
        {" "}
        Month{" "}
      </Button>
      <Button
        sx={activeEl === "week" ? btnActive : btnStyle}
        onClick={() => {
          handleClick("week")
        }}
      >
        {" "}
        Week{" "}
      </Button>
      <Button
        sx={activeEl === "yesterday" ? btnActive : btnStyle}
        onClick={() => {
          handleClick("yesterday")
        }}
      >
        {" "}
        Yesterday{" "}
      </Button>
      <Button
        sx={activeEl === "today" ? btnActive : btnStyle}
        onClick={() => {
          handleClick("today")
        }}
      >
        {" "}
        Today{" "}
      </Button>
    </>
  )
}
