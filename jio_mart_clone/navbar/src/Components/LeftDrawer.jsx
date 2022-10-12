import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react';


const LeftDrawer = (props) => {

    console.log("hello from leftdrawer")

    const { isOpen, onClose, btnRef } = props;

    return  (
        <>
          
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <div>
                  <div>
                    <img src="https://www.jiomart.com/msassets/images/icons/profile-sign.svg" alt="Userpic" />
                    <h4>Hello,Sign in</h4>
                  </div>
                  <div>
                    <button>Account</button>
                    <button>Orders</button>
                  </div>
                </div>
              </DrawerHeader>
    
              <DrawerBody>
               <div>
                <ul>
                  <li>Home</li>
                  <li>Shop by Category</li>
                  <li>My List</li>
                  <li>JioMart Wallet</li>
                  <li>JioMart gift Store</li>
                  <li>JioMart Gift Card</li>
                  <li>GoGreen with JioMart</li>
                  <li>All Offers</li>
                </ul>
               </div>
               <div>
                <ul>
                  <li>My Account</li>
                  <li>Need Help</li>
                  <li>About us</li>
                </ul>
               </div>
               <div>
                <h3>CONTACT US</h3>
                <p>WhatsApp us : <span style={color="#008ecc" }></span> 70003 70003 <br />
                  Call Us : 1800 890 1222 <br />
                  8:00 AM to 8:00 PM, 365 days <br />  
                  Please note that you are accessing the BETA Version of www.jiomart.com <br />
                  Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com</p>
               </div>
              </DrawerBody>
    
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
}
export default LeftDrawer