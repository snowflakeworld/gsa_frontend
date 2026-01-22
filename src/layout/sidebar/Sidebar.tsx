import { type FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

import { ROUTERS } from '@/configs'
import { useDeviceType, useLogout } from '@/hooks'
import { SidebarHeader } from './SidebarHeader'

interface SidebarProps {
  width?: number | string
  closeDrawer?: () => void
}

const MENU_ITEMS = [
  { id: 'account', label: 'My Account', icon: <AccountCircleOutlined fontSize='small' />, path: ROUTERS.Account.Home },
  { id: 'security', label: 'Security', icon: <LockOutline fontSize='small' />, path: ROUTERS.Account.Security },
  { id: 'address', label: 'Address', icon: <LocationOnOutlined fontSize='small' />, path: ROUTERS.Account.Address },
  { id: 'billing', label: 'Billing', icon: <PaymentOutlined fontSize='small' />, path: ROUTERS.Account.Billing },
  {
    id: 'membership',
    label: 'Membership',
    icon: <CardMembershipOutlined fontSize='small' />,
    path: ROUTERS.Account.Membership
  },
  {
    id: 'submission',
    label: 'My Submission',
    icon: <DescriptionOutlined fontSize='small' />,
    path: ROUTERS.Account.Submission
  },
  {
    id: 'track',
    label: 'Track Orders',
    icon: <LocalShippingOutlined fontSize='small' />,
    path: ROUTERS.Account.TrackOrders
  }
]

export const Sidebar: FC<SidebarProps> = ({ width = 320, closeDrawer = undefined }) => {
  const [curIdx, setCurIdx] = useState<number>(0)
  const navigate = useNavigate()
  const { isLargeScreen, isSmallScreen } = useDeviceType()
  const logout = useLogout()

  const handleItemClick = (idx: number) => {
    setCurIdx(idx)
    navigate(MENU_ITEMS[idx].path)
  }

  const handleLogout = () => {
    logout()
    navigate(ROUTERS.Home)
  }

  const handleClose = () => {
    if (closeDrawer) closeDrawer()
  }

  return (
    <Stack sx={{ width: width && '100%', px: isLargeScreen ? 5 : 2.5, py: isLargeScreen ? 6.25 : 2.5 }} gap={1.5}>
      {isSmallScreen && <SidebarHeader onClose={handleClose} />}
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
        {MENU_ITEMS.map((item, index) => (
          <ListItemButton
            key={'sidebar-' + item.id}
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
