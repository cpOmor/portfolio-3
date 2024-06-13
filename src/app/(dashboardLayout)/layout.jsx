import Container from "@/components/shared/Container/Container";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Container> dashboard navbar</Container>

      {children}
      <Container> dashboard Footer</Container>
    </div>
  );
};

export default DashboardLayout;
