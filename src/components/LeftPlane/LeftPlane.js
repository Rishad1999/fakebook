import React from 'react'
import "./LeftPlane.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import ReplyIcon from '@mui/icons-material/Reply';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MmsIcon from '@mui/icons-material/Mms';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function LeftPlane() {
  return (
    <div className='leftPlaneBox'>
        <div className="leftPlaneContainer">
          <div className="leftPlaneMenu">
            <li className="leftPlaneMenuItem">
                <MailOutlineIcon className='leftPlaneMenuIcon'/>
                <span className="leftPlaneMenuText">Messages</span>
            </li>
            <li className="leftPlaneMenuItem">
                <VoicemailIcon className='leftPlaneMenuIcon'/>
                <span className="leftPlaneMenuText">Voice Mail</span>
            </li>
            <li className="leftPlaneMenuItem">
                <ReplyIcon className='leftPlaneMenuIcon'/>
                <span className="leftPlaneMenuText">Reply</span>
            </li>
            <li className="leftPlaneMenuItem">
                <PermPhoneMsgIcon className='leftPlaneMenuIcon'/>
                <span className="leftPlaneMenuText">Phone</span>
            </li>
            <li className="leftPlaneMenuItem">
                <MmsIcon className='leftPlaneMenuIcon'/>
                <span className="leftPlaneMenuText">MMS</span>
            </li>
            <li className="leftPlaneMenuItem">
                <AcUnitIcon className='leftPlaneMenuIcon'/>
                <span className="leftPlaneMenuText">Unit</span>
            </li>
            <li className="leftPlaneMenuItem">
                <AnnouncementIcon className='leftPlaneMenuIcon'/>
                <span className="leftPlaneMenuText">Announcement</span>
            </li>
            <li className="leftPlaneMenuItem">
                <ContactSupportIcon className='leftPlaneMenuIcon'/>
                <span className="leftPlaneMenuText">Support</span>
            </li>
            <hr/>
            <div className="pagesYouLiked">
              <h3>Pages You Liked</h3>
              <div className="pageList">
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">Code with Mosh</span>
              </li>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
