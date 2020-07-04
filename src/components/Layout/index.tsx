import React from 'react'

import { Grid } from './styles'

import ServerList from '../../components/ServerList'
import ServerName from '../../components/ServerName'
import ChannelInfo from '../../components/ChannelInfo'
import ChannelList from '../../components/ChannelList'
import UserInfo from '../../components/UserInfo'

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
        </Grid>
    )
}

export default Layout