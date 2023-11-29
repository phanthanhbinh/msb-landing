import CalendarLocale from "rc-picker/lib/locale/vi_VN";

const locale: any = {
  lang: {
    placeholder: "Chọn thời điểm",
    yearPlaceholder: "Chọn năm",
    quarterPlaceholder: "Chọn quý",
    monthPlaceholder: "Chọn tháng",
    weekPlaceholder: "Chọn tuần",
    rangePlaceholder: ["Ngày bắt đầu", "Ngày kết thúc"],
    rangeYearPlaceholder: ["Năm bắt đầu", "Năm kết thúc"],
    rangeQuarterPlaceholder: ["Quý bắt đầu", "Quý kết thúc"],
    rangeMonthPlaceholder: ["Tháng bắt đầu", "Tháng kết thúc"],
    rangeWeekPlaceholder: ["Tuần bắt đầu", "Tuần kết thúc"],
    shortWeekDays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
    shortMonths: ["TH 1", "TH 2", "TH 3", "TH 4", "TH 5", "TH 6", "TH 7", "TH 8", "TH 9", "TH 10", "TH 11", "TH 12"],
    ...CalendarLocale,
  },
  timePickerLocale: {
    placeholder: "Chọn thời gian",
    rangePlaceholder: ["Bắt đầu", "Kết thúc"],
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
