import "@arco-design/web-vue/dist/arco.css";
import {
    Layout,
    LayoutContent,
    LayoutHeader,
    Empty,
    LayoutSider,
    Form,
    FormItem,
    Input,
    InputNumber,
    InputPassword,
    Popover,
    SkeletonShape,
    SkeletonLine,
    Skeleton,
    Tooltip,
    Badge,
    TabPane,
    InputSearch,
    InputTag,
    Switch,
    Space,
    Popconfirm,
    Radio,
    RadioGroup,
    Button,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    Select,
    Tag,
    Tabs,
    Textarea,
    TimePicker,
    Timeline,
    TreeSelect,
    Upload,
    Option,
    MonthPicker,
    RangePicker,
    YearPicker,
    WeekPicker,
    Affix
} from "@arco-design/web-vue";

const components = [Layout,Affix, LayoutContent, Empty, LayoutHeader, LayoutSider, Form, FormItem, Input, InputNumber, Popover, SkeletonShape, SkeletonLine, Skeleton, Tooltip, Badge, TabPane, InputPassword, InputSearch, InputTag, Switch, Space, Popconfirm, Radio, RadioGroup, Button, Checkbox, CheckboxGroup, DatePicker, Select, Tag, Tabs, Textarea, TimePicker, Timeline, TreeSelect, Upload, Option, MonthPicker, RangePicker, YearPicker, WeekPicker];

export const arcoComponents = {
    install: (Vue) => {
        // 按需引入组件库
        for (const component of components) {
            if (component.name) {
                let name = "";
                const reg = /^[A-Z]+$/;
                component.name.split("").forEach((i, index) => {
                    if (index > 0 && reg.test(i)) {
                        name += "-" + i;
                    } else {
                        name += i;
                    }
                });
                Vue.component("a-" + name.toLowerCase(), component);
            }
        }
    }
};

export default arcoComponents;
