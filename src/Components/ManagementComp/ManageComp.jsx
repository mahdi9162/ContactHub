import AddContact from '../AddContact/AddContact';
import ShowContacts from '../ShowContacts/ShowContacts';
import Container from '../Container/Container';


const ManageComp = () => {
  

  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row md:gap-40 px-3 md:px-0 ">
          <div>
            <AddContact></AddContact>
          </div>
          <div>
            <ShowContacts></ShowContacts>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ManageComp;
