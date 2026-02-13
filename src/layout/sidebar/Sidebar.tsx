import { type FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  AccountCircleOutlined,
  CardMembershipOutlined,
  DescriptionOutlined,
  LocalShippingOutlined,
  LocationOnOutlined,
  LockOutline,
  LogoutOutlined
} from '@mui/icons-material'
import { Divider, List, ListItemButton, ListItemText, Stack } from '@mui/material'

import { ROUTERS } from '@/configs'
import { useDeviceType, useDialogs, useLogout } from '@/hooks'
import { showToast } from '@/utils'
import { SidebarHeader } from './SidebarHeader'

interface SidebarProps {
  width?: number | string
  closeDrawer?: () => void
}

const MENU_ITEMS = [
  { id: 'account', label: 'My Account', icon: <AccountCircleOutlined fontSize='small' />, path: ROUTERS.Account.Home },
  { id: 'security', label: 'Security', icon: <LockOutline fontSize='small' />, path: ROUTERS.Account.Security },
  { id: 'address', label: 'Address', icon: <LocationOnOutlined fontSize='small' />, path: ROUTERS.Account.Address },
  // { id: 'billing', label: 'Billing', icon: <PaymentOutlined fontSize='small' />, path: ROUTERS.Account.Billing },
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
  const navigate = useNavigate()
  const { isLargeScreen, isSmallScreen } = useDeviceType()
  const logout = useLogout()
  const dialogs = useDialogs()

  const handleItemClick = useCallback(
    (idx: number) => {
      navigate(MENU_ITEMS[idx].path)
    },
    [navigate]
  )

  const handleLogout = useCallback(async () => {
    const confirmed = await dialogs.confirm('Are you sure you want to log out?', {
      title: 'Confirm Logout',
      severity: 'warning',
      okText: 'Log Out',
      cancelText: 'Cancel'
    })

    if (!confirmed) return

    showToast('Successfully logged out!', 'success')
    logout()
    navigate(ROUTERS.Home)
  }, [dialogs, navigate])

  const handleClose = useCallback(() => {
    if (closeDrawer) closeDrawer()
  }, [closeDrawer])

  return (
    <Stack sx={{ width: width && '100%', px: isLargeScreen ? 5 : 2.5, py: isLargeScreen ? 6.25 : 2.5 }} gap={1.5}>
      {isSmallScreen && <SidebarHeader onClose={handleClose} />}
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
        {MENU_ITEMS.map((item, index) => (
          <ListItemButton
            key={'sidebar-' + item.id}
            selected={window.location.pathname === item.path}
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
