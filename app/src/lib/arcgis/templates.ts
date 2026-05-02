import PopupTemplate from "@arcgis/core/PopupTemplate";

export const CompanyPopupTemplate = new PopupTemplate({
  title: "{name}",
  content: `
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 4px;"><b>Category</b></td>
        <td style="padding: 4px;">{category}</td>
      </tr>
      <tr>
        <td style="padding: 4px;"><b>City</b></td>
        <td style="padding: 4px;">{city}</td>
      </tr>
      <tr>
        <td style="padding: 4px;"><b>State</b></td>
        <td style="padding: 4px;">{state}</td>
      </tr>
    </table>
  `,
});
