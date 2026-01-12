import { routers } from '@/configs'
import { useDeviceType, useLogout } from '@/hooks'
import {
  AccountCircleOutlined,
  CardMembershipOutlined,
  DescriptionOutlined,
  LocalShippingOutlined,
  LocationOnOutlined,
  LockOutline,
  LogoutOutlined,
  PaymentOutlined
} from '@mui/icons-material'
import { Divider, List, ListItemButton, ListItemText, Stack } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SidebarHeader } from './sidebar/SidebarHeader'

interface SidebarProps {
  width?: number | string
}

const MENU_ITEMS = [
  { id: 'account', label: 'My Account', icon: <AccountCircleOutlined fontSize='small' />, path: routers.Account.Home },
  { id: 'security', label: 'Security', icon: <LockOutline fontSize='small' />, path: routers.Account.Security },
  { id: 'address', label: 'Address', icon: <LocationOnOutlined fontSize='small' />, path: routers.Account.Address },
  { id: 'billing', label: 'Billing', icon: <PaymentOutlined fontSize='small' />, path: routers.Account.Billing },
  {
    id: 'membership',
    label: 'Membership',
    icon: <CardMembershipOutlined fontSize='small' />,
    path: routers.Account.Membership
  },
  {
    id: 'submission',
    label: 'My Submission',
    icon: <DescriptionOutlined fontSize='small' />,
    path: routers.Account.Submission
  },
  {
    id: 'track',
    label: 'Track Orders',
    icon: <LocalShippingOutlined fontSize='small' />,
    path: routers.Account.TrackOrders
  }
]

export const Sidebar: FC<SidebarProps> = ({ width = 320 }) => {
  const [curIdx, setCurIdx] = useState(0)
  const navigate = useNavigate()
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  const handleItemClick = (idx: number) => {
    setCurIdx(idx)
    navigate(MENU_ITEMS[idx].path)
  }

  const handleLogout = () => {
    useLogout()
    navigate(routers.Home)
  }

  const handleClose = () => {}

  return (
    <Stack sx={{ width: width && '100%', px: !isScreenSmall ? 5 : 2.5, py: !isScreenSmall ? 6.25 : 2.5 }} gap={1.5}>
      {isScreenSmall ? <SidebarHeader onClose={handleClose} /> : <></>}
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
        {MENU_ITEMS.map((item, index) => (
          <ListItemButton
            key={item.id}
            selected={curIdx === index}
            onClick={() => handleItemClick(index)}
            sx={{ borderRadius: 1, gap: 2 }}
          >
            {item.icon}
            <ListItemText primary={item.label} color='text.normal' />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
        <ListItemButton onClick={handleLogout} sx={{ borderRadius: 1, gap: 2 }}>
          <LogoutOutlined />
          <ListItemText primary='Sign Out' />
        </ListItemButton>
      </List>
    </Stack>
  )
}
